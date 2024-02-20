import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'
import { AiOutlineDollarCircle } from "react-icons/ai";

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";
    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting])

  return (
    <div className='form-wrapper'>
        <h2 className='h3'>Create Budget</h2>
        <fetcher.Form method='post' cla-ssName='grid-sm' ref={formRef}>
            <div className='grid-xs'>
                <label htmlFor="newBudget">Budget Name</label>
                <input type="text" name="newBudget" id="newBudget" placeholder='e.g., Groceries' ref={focusRef} required />
            </div>
            <div className='grid-xs'>
                <label htmlFor='newBudgetAmount'>Amount</label>
                <input type="number" step="0.01" name="newBudgetAmount" id="newBudgetAmount" placeholder='e.g., $350' inputMode="decimal" required />
            </div>
            <input type="hidden" name="_action" value="createBudget"/>
            <button type='submit' className='btn btn--dark mt-2' disabled={isSubmitting}>
                {
                    isSubmitting? <span>Submitting..</span>:
                    (
                        <>
                            <span>Create Budget</span>
                            <AiOutlineDollarCircle />
                        </>
                    )
                }
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm
