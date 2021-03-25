import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    OnCreateForm = (formValue) => {
        this.props.createStream(formValue);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm OnSubmit={this.OnCreateForm} />
            </div>
        )
    }
}

export default connect(
    null,
    {
        createStream: createStream
    }
)(StreamCreate);