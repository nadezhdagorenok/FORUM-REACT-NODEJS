"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import FlowersForumBlock from '../components/FlowersForumBlock.js';

test('render FlowersForumBlock', () => {

    const component = renderer.create(
        <FlowersForumBlock title="Flower's Topics!"/>
    );
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});



