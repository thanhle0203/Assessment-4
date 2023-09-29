//5. Explain various hooks in functional component (at least 5) based on all code above 

// useState Hook:

// The useState hook is used to declare the state in a functional component. In this code, it's used to create a productDetails state variable and a setProductDetails function to update this state.
// Syntax: const [state, setState] = useState(initialState);
// Example from the code: const [productDetails, setProductDetails] = useState(defaultValues);

// useDispatch Hook:
// The useDispatch hook is used to dispatch actions in Redux. In this code, it's used to create a dispatch function, which is later used to dispatch the addProduct action.
// Syntax: const dispatch = useDispatch();
// Example from the code: dispatch(addProduct(productDetails));

// useSelector Hook:
// The useSelector hook is used to extract data from the Redux store state. In this code, it's used to get the defaultValues from the productReducer.
// Syntax: const data = useSelector(state => state.data);
// Example from the code: const defaultValues = useSelector(state => state.productReducer.defaultValues);