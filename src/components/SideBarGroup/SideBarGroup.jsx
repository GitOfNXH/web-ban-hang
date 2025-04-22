import { Rate } from 'antd';
import { CheckboxGroup, Label, PriceContent, TextContent } from './styles';

const InfoGroup = () => {
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => (
                    <TextContent key={index}>{option}</TextContent>
                ));
            case 'checkbox':
                return <CheckboxGroup options={options} />;
            case 'star':
                return options.map((option, index) => {
                    return (
                        <div key={index}>
                            <Rate
                                disabled
                                allowHalf
                                defaultValue={option}
                                style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '12px',
                                }}
                            />
                            <span className='ant-rate-text'>
                                {`từ ${option} sao`}
                            </span>
                        </div>
                    );
                });
            case 'price':
                return options.map((option, index) => {
                    return <PriceContent key={index}>{option}</PriceContent>;
                });
            default:
                return {};
        }
    };

    return (
        <div>
            <div>
                <Label>Danh mục sản phẩm</Label>
                <div style={{ padding: '0 8px' }}>
                    {renderContent('text', ['Tủ lạnh', 'TV', 'Máy giặt'])}
                </div>
            </div>
            <div>
                <Label>Danh mục sản phẩm 2</Label>
                <div style={{ padding: '0 8px' }}>
                    {renderContent('checkbox', [
                        {
                            label: 'Apple',
                            value: 'Apple',
                        },
                        {
                            label: 'Pear',
                            value: 'Pear',
                        },
                        {
                            label: 'Orange',
                            value: 'Orange',
                        },
                    ])}
                </div>
            </div>
            <div>
                <Label>Đánh giá</Label>
                <div style={{ padding: '0 8px' }}>
                    {renderContent('star', [3, 2.5, 4])}
                </div>
            </div>
            <div>
                <Label>Giá</Label>
                <div style={{ padding: '0 8px' }}>
                    {renderContent('price', [
                        'Dưới 40.000đ',
                        '40.000đ đến 100.000đ',
                        '100.000đ đến 200.000đ',
                        '200.000đ đến 500.000đ',
                    ])}
                </div>
            </div>
        </div>
    );
};

export default InfoGroup;
