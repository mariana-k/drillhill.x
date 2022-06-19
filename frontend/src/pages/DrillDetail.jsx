import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import { Question, Title3 } from '../components';

const DrillDetail = () => {
    const { drillData } = useStateContext();
    console.log(drillData);

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <div className="text-left">
                <Title3 text={drillData.name} />
                {
                    drillData?.questions?.map((item) => (
                        <Question key={item._key} question={item} options={item.options} />
                    ))
                }
            </div>
        </div>
    );
};

export default DrillDetail;
