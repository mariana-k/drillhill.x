import React from 'react';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';

import { Title4 } from '..';

const Question = ({ className, question, options }) => (
    <div className={`my-4 ${className}`}>
        <Title4 text={question.description} />
        <ol className="mb-4">
            {
                options?.map((item) => (
                    <li><code><RadioButtonComponent key={item._key} checked label={item.description} name="option" value={item._id} /></code></li>
                ))
            }
        </ol>
    </div>
);

export default Question;
