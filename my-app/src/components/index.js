import { Button } from 'antd';

const maintenance = () => {
    const sensorSource = [
        {
          key: '1',
          start: '11/04/2021',
          end: '12/04/2021',
          id: '1234',
          name: 'Sensor D',
          location: 'Building A',
          responsible: 'Lim Bo Huat',
          remarks: 'Looks fine',
        },
        {
          key: '2',
          start: '27/12/2021',
          end: '28/12/2021',
          id: '2134212',
          name: 'Sensor C',
          location: 'Building B',
          responsible: 'Tan Bo Seng',
          remarks: 'Tester',
        },
      ]

    return (
    <div className='miss-maint'>
        <Button
          onClick={() => {
            setisPresetVisible(true)
          }}
        >
          Preset for next maintenance
          <SettingOutlined />
        </Button>
        <Button
          style={{ visibility: missed > 0 ? 'visible' : 'hidden', float: '' }}
          type={missed > 0 ? 'primary' : ''}
          danger={missed > 0 ? true : false}
          onClick={() => {
            setisMissedVisible(true)
          }}
        >
          {missed} Missed Maintenance
        </Button>

        <MissedMaint
          isMissedVisible={isMissedVisible}
          setisMissedVisible={setisMissedVisible}
          sensorSource={sensorSource}
        />
        <Preset isPresetVisible={isPresetVisible} setisPresetVisible={setisPresetVisible} />
    </div>
    )
}

export default maintenance
