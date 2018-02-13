"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import CarsForumBlock from '../components/CarsForumBlock.js';

test('render CarsForumBlock', () => {

    const component = renderer.create(
        <CarsForumBlock title="CAR's Topics!" />
    );
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});



