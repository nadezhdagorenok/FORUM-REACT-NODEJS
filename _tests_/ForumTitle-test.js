"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import ForumTitle from '../components/ForumTitle';

test('работа ForumTitle', () => {

    const component = renderer.create(
        <ForumTitle />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

});