import BrandRecognition from '@/assets/images/icon-brand-recognition.svg';
import DetailedRecords from '@/assets/images/icon-detailed-records.svg';
import FullyCustomizable from '@/assets/images/icon-fully-customizable.svg';

export default {
  namespaced: true,
  state() {
    return {
      statistics: [
        {
          img: BrandRecognition,
          title: 'Brand Recognition',
          description:
            'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
        },
        {
          img: DetailedRecords,
          title: 'Detailed Records',
          description:
            'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
        },
        {
          img: FullyCustomizable,
          title: 'Fully Customizable',
          description:
            'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
        }
      ]
    };
  }
};
