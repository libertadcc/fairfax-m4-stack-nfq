import React, { Component } from 'react';
import ModalInfo from './ModalInfo';
import Question from './Question/index.js';
import PropTypes from 'prop-types';
import FloatingActionButtons from './Button/index.js';
import './styles.scss';

class StackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.dialogueFunction = this.dialogueFunction.bind(this);
  }

  dialogueFunction() {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    const { dataQuestion } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <ul className="list">
          {dataQuestion.map(item => {
            return (
              <li className="question__item" key={item.id}>
                <Question item={item} />
              </li>
            );
          })}
        </ul>
        <FloatingActionButtons dialogueFunction={this.dialogueFunction} />
        {isOpen && <ModalInfo dialogueFunction={this.dialogueFunction} />}
      </div>
    );
  }
}

StackList.propTypes = {
  dataQuestion: PropTypes.arrayOf(PropTypes.object)
};
export default StackList;
