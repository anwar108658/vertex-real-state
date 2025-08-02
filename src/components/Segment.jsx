import { Segmented } from 'antd';
const Segment = () => (
  <Segmented
    options={[ 'Property', 'New Projects', 'Transactions', 'TrueEstimate','Agents']}
    defaultValue='Weekly'
    size='large'
    className='rounded-lg shadow-md p-4 !text-white'
    onChange={value => {
      console.log(value); // string
    }}
  />
);
export default Segment;