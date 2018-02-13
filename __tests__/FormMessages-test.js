import React from 'react';
import renderer from 'react-test-renderer';

import FormMessages from '../components/FormMessages';

describe('<FormMessages />', () => {
    it('Renders FormMessages', () => {
        const formSubmit = jest.fn();
        const component = renderer.create(
            <FormMessages  cbSendClicked={formSubmit}
                           valueButton='Send'
                           typeButton = 'submit'
            />
        );
        const wrap = component.toJSON();
        expect(wrap).toMatchSnapshot();
    });
});