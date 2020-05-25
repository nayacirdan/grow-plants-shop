import React from "react";
import Button from "./Button";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";


let container=null;

beforeEach(()=>{
    container=document.createElement('div');
    document.body.append(container);
})
afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})



describe('Btn testing', ()=>{
    test('btn renders correctly', ()=>{
        act(()=>{
            render(<Button classText='somebtn'/>, container);
        })
    })

    test('btn has properties', ()=>{
        act(()=>{
            render(<Button classText='testClass' text='Test Btn' isDisabled />, container);
        })
        const button=document.querySelector('button');
        expect(button).toHaveClass('testClass');
        expect(button.textContent).toBe('Test Btn');
        expect(button).toBeDisabled();
    })

    test('btn onclick function is called', ()=>{
        const btnFnMock=jest.fn();
        btnFnMock.mockImplementation(()=>{
            console.log('btn pressed');
        })
        act(()=>{
            render(<Button classText='testClass' onClick={btnFnMock}/>, container);
        })
        const button=document.querySelector('button');

        button.dispatchEvent(new MouseEvent('click', {bubbles:true}));

        expect(btnFnMock).toHaveBeenCalledTimes(1);
    })


});