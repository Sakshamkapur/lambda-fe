import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState as editorIState } from '../../../../store/reducers/editor';
import toolBarReducer, { initialState } from '../../../../store/reducers/toolbar';
import { testfontsList } from '../../../../utils/test-data';
import FontSelect from './index';

const mockStore = configureStore([thunk]);
const setup = () => {
    const storeState = { toolbar: {...initialState,fonts: testfontsList }, 
        editor: {...editorIState, activeObject: { type: "textbox" }}  };
    const store = mockStore(storeState);
    
    render(<Provider store={store}>
        <FontSelect />
    </Provider>);

    return store;
};

test("If no activefont select first", () => {
    const store = setup();

    const state = store.getState();
    let toolbarState:any = state;
    store.getActions().forEach((action) => {
        toolbarState = toolBarReducer(toolbarState, action);
    });

    expect(toolbarState.activeFont.family).toEqual(testfontsList[0].family);
});

test("Select a font", () => {
    const store = setup();
    store.clearActions();

    userEvent.click(screen.getByLabelText("dropdown-value"));
    expect(screen.getByLabelText("dropdown-items")).toBeInTheDocument();
    userEvent.click(screen.getByLabelText("dropdown-items").children[2]);
    
    const state = store.getState();
    let toolbarState:any = state;
    store.getActions().forEach((action) => {
        toolbarState = toolBarReducer(toolbarState, action);
    });

    expect(toolbarState.activeFont.family).toEqual(testfontsList[2].family);
});