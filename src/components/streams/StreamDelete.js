import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderAction = () => {
        return (
            <div>
                <button
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}
                    className="ui button negative">
                    Delete
                     </button>
                <Link to="/" className="ui button">Cancel</Link>
            </div>
        )
    }


    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream ?';
        }
        return `Are you sure you want to delete a stream having title: ${this.props.stream.title}?`;
    }

    render() {
        return (
            <div>
                <Modal
                    header="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    dismissModal={() => history.push("/")}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream: fetchStream,
    deleteStream: deleteStream
})(StreamDelete);