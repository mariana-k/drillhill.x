import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import { Question, Title3, ButtonRegular } from '../components';
import STRINGS from '../data/strings';
import VARIABLES from '../utils/theme';

const DrillDetail = () => {
    const { currentColor, drillData, setIsSubmitted } = useStateContext();
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
                <ButtonRegular
                    className={VARIABLES.borderRadius['border-radius-lg']}
                    bgColor={currentColor}
                    color={VARIABLES.colors['color-white']}
                    text={STRINGS.buttonText}
                    onClick={() => {
                        setIsSubmitted(true)
                    }}
                />
            </div>
        </div>
    );
};

export default DrillDetail;
