/**
 * @ Author: Hikaru
 * @ Create Time: 2022-06-26 03:37:03
 * @ Modified by: Hikaru
 * @ Modified time: 2022-07-22 00:12:34
 * @ Description: i@rua.moe
 */

import React, { useEffect, useState } from 'react';
import style from '@/style/components.less';
import { useIntl, useModel } from 'umi';
import { Button, Col, Row, Spin } from 'antd';
import { isLeapYear } from '@/utils/common';
import { oddMonth } from '@/config/contract';
import classNames from 'classnames';
import { StarFilled } from '@ant-design/icons';

const MonthAndDay: React.FC<{
  yearOfBirth: number | undefined;
  monthOfBirth: number | undefined;
  dayOfBirth: number | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMonthOfBirth: React.Dispatch<React.SetStateAction<number | undefined>>;
  setDayOfBirth: React.Dispatch<React.SetStateAction<number | undefined>>;
}> = ({ yearOfBirth, monthOfBirth, dayOfBirth, setStep, setMonthOfBirth, setDayOfBirth }) => {
  const { PrimeContract } = useModel('astroContracts');
  const { Account } = useModel('web3');

  const [AllowMonth, setAllowMonth] = useState<number[]>([]);
  const [AvailableLoading, setAvailableLoading] = useState<boolean>(true);

  const CurrentDay = new Date().getDate();

  const intl = useIntl();

  const isAvailable = async () => {
    const currentDay = new Date().getDate();
    const promises = [];
    for (let month = 0; month < 12; month++) {
      const query = PrimeContract?.getTokenIdByMonthAndDay(month + 1, currentDay);
      promises.push(query);
    }
    const months = [];
    const results = await Promise.all(promises);
    for (let month = 0; month < results.length; month++) {
      if (results[month].toNumber() === 0) {
        months.push(month);
      }
    }
    setAllowMonth(months);
    setAvailableLoading(false);
  };

  useEffect(() => {
    if (!!yearOfBirth && !!PrimeContract && !!Account) {
      isAvailable();
    }
  }, [yearOfBirth, Account, PrimeContract]);

  return (
    <div className={style.nftWrapper}>
      <div className={style.nftTitle}>
        {intl.formatMessage({
          id: 'astro.inputMonthAndDay',
          defaultMessage: '3/4, Select an available date.',
        })}
      </div>
      {!!yearOfBirth && !AvailableLoading ? (
        <Row
          gutter={[32, 32]}
          style={{
            width: '100%',
          }}
        >
          {AllowMonth.map((value) => {
            const month = value + 1;
            if (!isLeapYear(Number(yearOfBirth)) && month === 2 && CurrentDay > 28) {
              return null;
            } else if (CurrentDay > 30 && !oddMonth[month]) {
              return null;
            } else
              return (
                <Col
                  key={month}
                  xs={12}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                  onClick={() => {
                    setMonthOfBirth(month);
                    setDayOfBirth(CurrentDay);
                  }}
                >
                  <div
                    className={classNames(
                      style.nftItem,
                      monthOfBirth === month ? style.active : '',
                    )}
                    onClick={() => setMonthOfBirth(month)}
                  >
                    {month}/{CurrentDay}
                  </div>
                </Col>
              );
          })}
        </Row>
      ) : (
        <Spin
          indicator={
            <StarFilled
              style={{
                fontSize: 24,
                color: '#fff',
              }}
              spin
            />
          }
          tip={
            <span
              style={{
                color: '#fff',
              }}
            >
              Querying available months...
            </span>
          }
        />
      )}
      <div className={style.buttons}>
        <Button
          size="large"
          shape="round"
          type="primary"
          className={style.button}
          disabled={!yearOfBirth || !monthOfBirth || !dayOfBirth}
          onClick={() => {
            setStep(4);
          }}
        >
          {intl.formatMessage({
            id: 'astro.nextStep',
            defaultMessage: 'Next Step',
          })}
        </Button>
      </div>
    </div>
  );
};

export default MonthAndDay;
