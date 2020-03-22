import React from 'react';
import {FakeNewsServiceConsumer} from '../fakeNewsService-context';

const withFakeNewsService = () => (Wrapped) => {

    return (props) => {
        return (
            <FakeNewsServiceConsumer>
                {
                    (fakeNewsService) => {
                        return <Wrapped {...props} fakeNewsService={fakeNewsService}/>
                    }
                }
            </FakeNewsServiceConsumer>
        );
    }
};

export default withFakeNewsService;