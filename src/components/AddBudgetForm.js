import React from 'react'
import { Form } from 'react-router-dom'
import { AiOutlineDollarCircle } from "react-icons/ai";

const AddBudgetForm = () => {
  return (
    <div className='form-wrapper'>
        <h2 className='h3'>Create Budget</h2>
        <Form method='post' cla-ssName='grid-sm'>
            <div className='grid-xs'>
                <label htmlFor='newBudget'>Budget Name</label>
                <input type="text" name="newBudget" id="newBudget" placeholder='e.g., Groceries' required />
            </div>
            <div className='grid-xs'>
                <label htmlFor='newBudgetAmount'>Amount</label>
                <input type="number" step="0.01" name="newBudgetAmount" id="newBudgetAmount" placeholder='e.g., $350' inputMode="decimal" required />
            </div>
            <input type="hidden" name="_action" value="createBudget"/>
            <button type='submit' className='btn btn-dark mt-2'>
                <span>Create Budget</span>
                <AiOutlineDollarCircle />
            </button>
        </Form>
    </div>
  )
}

export default AddBudgetForm
