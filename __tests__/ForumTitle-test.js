import React from 'react';
import renderer from 'react-test-renderer';

import ForumTitle from '../components/ForumTitle';

    test('render ForumTitle', () => {
    const component = renderer.create(
        <ForumTitle title="Flower's Topics!"/>
    );
    let wrap = component.toJSON();
    expect(wrap).toMatchSnapshot();
});
