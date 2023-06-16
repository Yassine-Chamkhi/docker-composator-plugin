import { DefaultParser } from 'leto-modelizer-plugin-core';
import { parse as lidyParse } from 'src/lidy/dcompose';
import DockerComposatorPluginListener from 'src/parser/DockerComposatorPluginListener';

/**
 * Template of plugin parser.
 */
class DockerComposatorPluginParser extends DefaultParser {
  constructor(pluginData) {
    super(pluginData);
    this.listener = new DockerComposatorPluginListener();
  }

  isParsable(fileInformation) {
    return /\.ya?ml$/.test(fileInformation.path);
  }

  /**
   * Convert the content of files into Components.
   * @param {FileInput[]} [inputs=[]] - Data you want to parse.
   * @param {string} [parentEventId=null] - Parent event id.
   */
  parse(inputs = [], parentEventId = null) {
    this.pluginData.components = [];
    this.pluginData.parseErrors = [];

    inputs
      .filter(({ content, path }) => {
        if (content && content.trim() !== '') {
          return true;
        }
        this.pluginData.emitEvent({
          parent: parentEventId,
          type: 'Parser',
          action: 'read',
          status: 'warning',
          files: [path],
          data: {
            code: 'no_content',
            global: false,
          },
        });
        return false;
      })
      .forEach((input) => {
        const id = this.pluginData.emitEvent({
          parent: parentEventId,
          type: 'Parser',
          action: 'read',
          status: 'running',
          files: [input.path],
          data: {
            global: false,
          },
        });
        this.listener.fileInformation = input;
        this.listener.definitions = this.pluginData.definitions.components;
        // this.listener = new DockerComposatorPluginListener(
        //   input,
        //   this.pluginData.definitions.components,
        // );

        lidyParse({
          src_data: input.content,
          listener: this.listener,
          path: input.path,
          prog: {
            errors: [],
            warnings: [],
            imports: [],
            alreadyImported: [],
            root: [],
          },
        });

        this.pluginData.components.push(...this.listener.components);
        this.pluginData.emitEvent({ id, status: 'success' });
      });
  }
}

export default DockerComposatorPluginParser;
