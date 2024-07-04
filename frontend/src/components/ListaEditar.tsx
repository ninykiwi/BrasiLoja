import Image from 'next/image'
import React, { useState } from 'react';
import close from '../../public/icons/close.svg'
import rightArrow from '../../public/icons/leftArrow.svg'
import leftArrow from '../../public/icons/rightArrow.svg'
import { ProdutoHorizontal } from './Produto';
import ReactPaginate from 'react-paginate';

interface ListaEditarProps {
    isVisible: boolean;
    onClose: () => void;
}

const ListaEditar: React.FC<ListaEditarProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const items = Array.from({ length: 10 }, (_, index) => <ProdutoHorizontal key={index} />);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    React.useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
      };

    return (
        <section className='z-20 inset-0 w-full flex justify-center'>
            <div className='flex absolute items-center justify-center w-[1440px] h-auto rounded-[20px] bg-white'>
                <div className='bg-[#F0EFEF] flex flex-col rounded-[10px] w-[1224px] h-auto'>
                    <Image 
                        onClick={onClose}
                        src={close} 
                        className='self-end mr-[20px] mt-[45.9px] cursor-pointer' 
                        alt='...' 
                        width={45} 
                        height={45}
                         />
                    <p className='px-8 mb-[74px] text-[40px] font-black self-start'>Editar Produto</p>

                    <div className='flex flex-col w-full gap-[121px]'>
                        <div className='flex flex-col w-full gap-[60px]'>
                            {/*currentItems && currentItems.map((item, index) => (
                              <div key={index}>
                                <h3>Item #{item + 1}</h3>
                              </div>
                            ))*/} 

                            {currentItems}
                        </div>

                        <ReactPaginate
                          breakLabel="..."
                          nextLabel={
                            <Image 
                            src={rightArrow} 
                            alt="next" 
                             />
                          }
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={5}
                          pageCount={pageCount}
                          previousLabel={
                            <Image 
                            src={leftArrow} 
                            alt="previous" 
                             />
                          }
                          renderOnZeroPageCount={null}
                          containerClassName="flex justify-center mb-[115px] space-x-2"
                          pageClassName="flex items-center justify-center h-[30px] w-[30px] border rounded-1 border-[#F0EFEF]"
                          pageLinkClassName="text-black font-black text-4 flex items-center justify-center h-full w-full"
                          previousClassName="flex items-center justify-center h-auto w-auto border border-[#F0EFEF] rounded-1"
                          previousLinkClassName="flex items-center justify-center h-[11] w-[24]"
                          nextClassName="flex items-center justify-center h-auto w-auto rounded-1 border border-[#F0EFEF]"
                          nextLinkClassName="flex items-center justify-center h-[11] w-[24]"
                          breakClassName="flex items-center justify-center h-[30px] w-[30px] border rounded-1 border-[#F0EFEF]"
                          breakLinkClassName="text-black font-black text-4 flex items-center justify-center h-full w-full"
                          activeClassName="bg-[#D9D9D9] text-black"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListaEditar;