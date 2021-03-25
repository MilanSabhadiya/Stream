import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onEditForm = (formValue) => {
        this.props.editStream(this.props.match.params.id, formValue)
    }

    render() {
        if (!this.props.stream) {
            return <div>...Loading!</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm OnSubmit={this.onEditForm}
                    initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {
    fetchStream: fetchStream,
    editStream: editStream
})(StreamEdit);