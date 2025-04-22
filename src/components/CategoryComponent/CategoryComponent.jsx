import { Grid } from 'antd';
import { useEffect, useRef } from 'react';

import { CategoryInner, CategoryWrapper, TypeProduct } from './styles';

const categories = [
    'TV',
    'Tủ lạnh',
    'Điều hòa',
    'Máy tính',
    'Lap top',
    'Điện thoại',
    'TV',
    'Tủ lạnh',
    'Điều hòa',
    'Máy tính',
    'Lap top',
    'Điện thoại',
    'TV',
    'Tủ lạnh',
    'Điều hòa',
    'Máy tính',
    'Lap top',
    'Điện thoại',
    'TV',
    'Tủ lạnh',
    'Điều hòa',
    'Máy tính',
    'Lap top',
    'Điện thoại',
];

const { useBreakpoint } = Grid;

const CategoryComponent = () => {
    const scrollRef = useRef();
    const screens = useBreakpoint();

    useEffect(() => {
        if (scrollRef.current) {
            const handleWheel = e => {
                if (e.deltaY !== 0) {
                    e.preventDefault(); // ngăn scroll dọc
                    scrollRef.current.scrollLeft += e.deltaY; // chuyển thành scroll ngang
                }
            };
            scrollRef.current.addEventListener('wheel', handleWheel);
        }
    }, []);

    return (
        <CategoryWrapper style={{ top: !screens.md ? '120px' : '60px' }}>
            <CategoryInner ref={scrollRef} className='container'>
                {categories.map((category, index) => (
                    <TypeProduct key={index}>{category}</TypeProduct>
                ))}
            </CategoryInner>
        </CategoryWrapper>
    );
};

export default CategoryComponent;
