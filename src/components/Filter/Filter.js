// import { selectFilter } from '../redux/selectors';
// import { toast } from 'react-toastify';
// import Select from 'react-select';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     Container,
//     Form,
//     InputContainer,
//     InputLeft,
//     InputRight,
//     Label,
//     SelectContainer,
//     UnitLeft,
//     UnitRight,
//   } from './Filter.styled'
// import { CustomButton } from '../Button/Button';


// import {
//     setMake,
//     setPrice,
//     setFromMileage,
//     setToMileage,
//   } from '../redux/filterSlice';
  
 
//   import { useSelector, useDispatch } from 'react-redux';
  
  
//   export const SelectForm = ({ makes, prices, onFilterChange }) => {
//     const dispatch = useDispatch();
//     const filter = useSelector(selectFilter);
  
//     const makeOptions = makes.map(make => ({ value: make, label: make }));
  
//     const priceRangeOptions = [];
  
//     for (let i = 30; i <= 500; i += 10) {
//       priceRangeOptions.push({ value: i, label: `${i}` });
//     }
  
//     const handlePriceStepChange = selectedOption => {
//       dispatch(setPrice(selectedOption ? selectedOption.value : null));
//     };
  
//     const filteredPrices = prices.filter(price => price <= filter.selectedPrice);
  
//     const formatMileage = value => {
//       const cleanedValue = value.toString().replace(/,/g, '');
//       const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//       return formattedValue;
//     };
  
//     const handleMinInputChange = e => {
//       dispatch(setFromMileage(e.target.value.trim()));
//     };
  
//     const handleMaxInputChange = e => {
//       dispatch(setToMileage(e.target.value.trim()));
//     };
  
//     const handleFilterClick = () => {
//       if (
//         parseInt(filter.minValue.replace(/,/g, ''), 10) >
//         parseInt(filter.maxValue.replace(/,/g, ''), 10)
//       ) {
//         toast.error('Minimum mileage cannot be greater than maximum mileage');
//       }
  
//       const newFilters = {
//         make: filter.selectedMake,
//         filteredPrices: filteredPrices.map(price => ({
//           value: price,
//           label: `${price}`,
//         })),
//         minMileage: parseInt(filter.minValue.replace(/,/g, ''), 10),
//         maxMileage: parseInt(filter.maxValue.replace(/,/g, ''), 10),
//       };
//       onFilterChange(newFilters);
//     };
  
//     return (
//       <Container>
//         <SelectContainer>
//           <Label htmlFor="nameSelect">Car brand</Label>
//           <Select
//             id="nameSelect"
//             placeholder="Enter the text"
//             value={filter.selectedMake}
//             onChange={selectedOption => dispatch(setMake(selectedOption))}
//             options={makeOptions}
//             isClearable
//             styles={{
//                 control: styles => ({
//                   ...styles,
//                   width: '224px',
//                   height: '48px',
//                   borderColor: 'rgba(18, 20, 23, 0.2)',
//                   border: 'none',
//                   borderRadius: '14px',
//                   padding: '8px',
//                   fontSize: '16px',
//                   fontFamily: 'ManropeMedium',
//                   backgroundColor: 'rgba(247, 247, 251, 1)',
//                   appearance: 'none',
//                 }),
//                 option: (styles, { isFocused }) => {
//                   return {
//                     ...styles,
//                     color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
//                     fontFamily: 'ManropeMedium',
//                   };
//                 },
//                 menuList: base => ({
//                   ...base,
//                   '::-webkit-scrollbar': {
//                     width: '9px',
//                   },
//                   '::-webkit-scrollbar-track': {
//                     background: 'rgba(18, 20, 23, 0.05)',
//                   },
//                   '::-webkit-scrollbar-thumb': {
//                     background: 'rgba(18, 20, 23, 0.05)',
//                   },
//                   '::-webkit-scrollbar-thumb:hover': {
//                     background: 'rgba(18, 20, 23, 0.05)',
//                   },
//                 }),
//                 placeholder: styles => ({
//                   ...styles,
//                   color: 'rgba(18, 20, 23, 1)',
//                 }),
//               }}
//               components={{
//                 IndicatorSeparator: () => null,
//               }}
//             />
//           </SelectContainer>
  
//         <SelectContainer>
//           <Label htmlFor="priceSelect">Price/ 1 hour</Label>
//           <Select
//             id="priceSelect"
//             placeholder="To $"
//             value={
//               filter.selectedPrice
//                 ? { value: filter.selectedPrice, label: filter.selectedPriceLabel }
//                 : null
//             }
//             onChange={handlePriceStepChange}
//             options={priceRangeOptions}
//             isClearable
//             styles={{
//                 control: styles => ({
//                   ...styles,
//                   width: '224px',
//                   height: '48px',
//                   borderColor: 'rgba(18, 20, 23, 0.2)',
//                   border: 'none',
//                   borderRadius: '14px',
//                   padding: '8px',
//                   fontSize: '16px',
//                   fontFamily: 'ManropeMedium',
//                   backgroundColor: 'rgba(247, 247, 251, 1)',
//                   appearance: 'none',
//                 }),
//                 option: (styles, { isFocused }) => {
//                   return {
//                     ...styles,
//                     color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
//                     fontFamily: 'ManropeMedium',
//                   };
//                 },
//                 menuList: base => ({
//                   ...base,
//                   '::-webkit-scrollbar': {
//                     width: '9px',
//                   },
//                   '::-webkit-scrollbar-track': {
//                     background: 'rgba(18, 20, 23, 0.05)',
//                   },
//                   '::-webkit-scrollbar-thumb': {
//                     background: 'rgba(18, 20, 23, 0.05)',
//                   },
//                   '::-webkit-scrollbar-thumb:hover': {
//                     background: 'rgba(18, 20, 23, 0.05)',
//                   },
//                 }),
//                 placeholder: styles => ({
//                   ...styles,
//                   color: 'rgba(18, 20, 23, 1)',
//                 }),
//               }}
//               components={{
//                 IndicatorSeparator: () => null,
//               }}
//             />
//           </SelectContainer>
  
//         <Form>
//           <Label>Car mileage / km</Label>
//           <InputContainer>
//             <InputLeft
//               type="text"
//               value={formatMileage(filter.minValue)}
//               onChange={handleMinInputChange}
//             />
//             <UnitLeft>From</UnitLeft>
//             <InputRight
//               type="text"
//               value={formatMileage(filter.maxValue)}
//               onChange={handleMaxInputChange}
//             />
//             <UnitRight>To</UnitRight>
//           </InputContainer>
//         </Form>
//         <CustomButton text="Search" onClick={handleFilterClick} width="135px" />
//       </Container>
//     );
//   }
  
