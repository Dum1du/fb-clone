import React from 'react'
import "./Widgets.css";

function Widgets() {
  return (
    <div className='widgets'>
       
        <p className='test__wid'>
        It looks like you’re trying to display the content in a row while maintaining specific styling for each element. However, the issue might be that the flex properties and their values might be conflicting, particularly in how you're using the flex-direction and alignment properties.

Let's break it down and adjust a few things for you to ensure the layout works as expected:

1. The onchange container
Since you want to display the contents inside .onchange in a row and want the form and .details sections to be side by side, we can keep display: flex; for .onchange. However, you may need to adjust how the children inside .onchange are laid out to make sure they don’t conflict with each other.

2. The form inside .onchange
You’ve set flex-direction: column for the form, which stacks the form elements vertically. This is fine as long as you want the labels, inputs, and text areas to be in a vertical stack within the form. But you may want to ensure that the overall form doesn't take up too much space and that it aligns correctly.

3. The .details section
You have flex-direction: column for .details, which is correct if you want to stack the paragraphs vertically inside the .details div.
        </p>
    </div>
  )
}

export default Widgets