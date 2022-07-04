import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { increment, counter } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }

            <button
                onClick={() => increment()}
                disabled={isLoading}
                className='btn btn-primary'>
                Next quote
            </button>


        </>
    )
}
