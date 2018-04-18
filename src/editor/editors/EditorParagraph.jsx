// @flow

import React from 'react';
import Editor from './Editor';
import { mixer } from '../../helper/style';
import { TYPE_PARAGRAPH } from '../../type';
import ParagraphInput from './inputs/ParagraphInput';
import { EditorContext } from '../../context';

const styles = {
  wrapper: {
    width: '100%',
    position: 'relative',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wrapperLast: {
    padding: '0 0 12px 0',
  },
};

type Props = {
  isLastBlock: boolean,
};

class EditorParagraph extends Editor<Props> {
  static type = TYPE_PARAGRAPH
  static getInitialValues(blockID) {
    return {
      ...super.getInitialValues(blockID),
      type: EditorParagraph.type,
      value: '',
      input: React.createRef(),
    };
  }

  render() {
    const {
      isLastBlock,
    } = this.props;

    return (
      <div
        style={mixer([
          styles.wrapper,
          isLastBlock && styles.wrapperLast,
        ])}>
        <EditorContext.Consumer>
          {props => <ParagraphInput {...props} {...this.props} />}
        </EditorContext.Consumer>
      </div>
    );
  }
}

export default EditorParagraph;