"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MoneyForumBlock from '../components/MoneyForumBlock.js';

test('render MoneyForumBlock', () => {

    const component = renderer.create(
        <MoneyForumBlock title="Currency exchanges, Deposites, Rates!" />
    );
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});



