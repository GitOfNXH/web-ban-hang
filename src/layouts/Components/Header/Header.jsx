import { Badge, Col, Grid } from 'antd';
import Search from 'antd/lib/input/Search';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
    SearchOutlined,
} from '@ant-design/icons';

import {
    HeaderWrapper,
    LogoText,
    UserWrapper,
    UserText,
    CartWrapper,
    CartText,
    HeaderRowWrapper,
} from './styles';

const { useBreakpoint } = Grid;

const Header = () => {
    const screens = useBreakpoint();

    return (
        <HeaderWrapper>
            <div className='container'>
                {!screens.md ? (
                    <>
                        <HeaderRowWrapper>
                            <Col span={8}>
                                <UserWrapper>
                                    <UserOutlined
                                        style={{ padding: '0 5px' }}
                                    />
                                    <div>
                                        <UserText>Tài khoản</UserText>
                                    </div>
                                </UserWrapper>
                            </Col>

                            <Col
                                span={8}
                                style={{
                                    textAlign: 'center',
                                    lineHeight: '55px',
                                }}
                            >
                                <LogoText>NXHSHOP</LogoText>
                            </Col>

                            <CartWrapper>
                                <Badge size='small' count={4}>
                                    <ShoppingCartOutlined
                                        style={{
                                            fontSize: '30px',
                                            color: '#fff',
                                        }}
                                    />
                                </Badge>
                                <CartText>Giỏ hàng </CartText>
                            </CartWrapper>
                        </HeaderRowWrapper>

                        <HeaderRowWrapper>
                            <Col span={24}>
                                <Search
                                    style={{
                                        display: 'block',
                                    }}
                                    className='header-input'
                                    placeholder='Tìm kiếm sản phẩm'
                                    size='large'
                                    allowClear
                                    // onSearch={onSearch}
                                    enterButton={
                                        <span>
                                            <SearchOutlined
                                                style={{ marginRight: 4 }}
                                            />
                                            Tìm kiếm
                                        </span>
                                    }
                                />
                            </Col>
                        </HeaderRowWrapper>
                    </>
                ) : !screens.lg ? (
                    <HeaderRowWrapper>
                        <Col span={7}>
                            <UserWrapper>
                                <UserOutlined style={{ padding: '0 5px' }} />
                                <div>
                                    <UserText>Đăng nhập/Đăng ký</UserText>
                                    <UserText>
                                        Tài khoản
                                        <CaretDownOutlined />
                                    </UserText>
                                </div>
                            </UserWrapper>
                        </Col>
                        <Col span={13}>
                            <Search
                                style={{
                                    display: 'block',
                                    paddingRight: '6px',
                                }}
                                className='header-input'
                                placeholder='Tìm kiếm sản phẩm'
                                size='large'
                                allowClear
                                // onSearch={onSearch}
                                enterButton={
                                    <span>
                                        <SearchOutlined
                                            style={{ marginRight: 4 }}
                                        />
                                        Tìm kiếm
                                    </span>
                                }
                            />
                        </Col>
                        <Col span={4} style={{ display: 'flex' }}>
                            <CartWrapper>
                                <Badge size='small' count={4}>
                                    <ShoppingCartOutlined
                                        style={{
                                            fontSize: '30px',
                                            color: '#fff',
                                        }}
                                    />
                                </Badge>
                                <CartText>Giỏ hàng </CartText>
                            </CartWrapper>
                        </Col>
                    </HeaderRowWrapper>
                ) : (
                    <HeaderRowWrapper>
                        <Col span={4}>
                            <LogoText>XNHSHOP</LogoText>
                        </Col>
                        <Col span={13}>
                            <Search
                                style={{
                                    display: 'block',
                                    paddingRight: '8px',
                                }}
                                className='header-input'
                                placeholder='Tìm kiếm sản phẩm'
                                size='large'
                                allowClear
                                // onSearch={onSearch}
                                enterButton={
                                    <span>
                                        <SearchOutlined
                                            style={{ marginRight: 4 }}
                                        />
                                        Tìm kiếm
                                    </span>
                                }
                            />
                        </Col>
                        <Col
                            span={7}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '12px',
                                paddingLeft: '6px',
                            }}
                        >
                            <UserWrapper>
                                <UserOutlined style={{ padding: '0 5px' }} />
                                <div>
                                    <UserText>Đăng nhập/Đăng ký</UserText>
                                    <UserText>
                                        Tài khoản
                                        <CaretDownOutlined />
                                    </UserText>
                                </div>
                            </UserWrapper>
                            <CartWrapper>
                                <Badge size='small' count={4}>
                                    <ShoppingCartOutlined
                                        style={{
                                            fontSize: '30px',
                                            color: '#fff',
                                        }}
                                    />
                                </Badge>
                                <CartText>Giỏ hàng </CartText>
                            </CartWrapper>
                        </Col>
                    </HeaderRowWrapper>
                )}
            </div>
        </HeaderWrapper>
    );
};

export default Header;
