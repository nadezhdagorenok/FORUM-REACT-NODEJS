"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import HealthForumBlock from '../components/HealthForumBlock.js';

test('render HealthForumBlock', () => {

    const component = renderer.create(
        <HealthForumBlock title="The best Topics about Health!" />
    );
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});



