import React from 'react';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';

import { useStateContext } from '../../contexts/ContextProvider';
import { Title4 } from '..';

const Question = ({ className, question, options }) => {
    const { isSubmitted } = useStateContext();

    return (
        <div className={`my-4 ${className}`}>
            <Title4 text={question.description} />
            <ol className="mb-4">
                {
                    options?.map((item) => (
                        <li key={item._key}>
                            <RadioButtonComponent checked label={item.description} name={question._key} value={item._id} />
                            {isSubmitted &&
                                <span className={item.isCorrect ? 'text-emerald-600' : 'text-red-600'}>O</span>
                            }
                        </li>
                    ))
                }
            </ol>
        </div>
    )
};

export default Question;
