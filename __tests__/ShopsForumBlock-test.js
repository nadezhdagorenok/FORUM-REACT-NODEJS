"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import ShopsForumBlock from '../components/ShopsForumBlock.js';

test('render ShopsForumBlock', () => {

    const component = renderer.create(
        <ShopsForumBlock title="Shopping with pleasure!"/>
    );
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});



