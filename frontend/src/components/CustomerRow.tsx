import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export type CustomerRowType = {
    avatar?: string;
    customerid: number; // Assuming customerid is always provided and is a number based on your DB
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    address: string; // Assuming you're passing the entire address as a single string
};

const CustomerRow: FunctionComponent<CustomerRowType> = ({
    avatar,
    customerid,
    firstname,
    lastname,
    phone,
    email,
    address,
}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to customer detail page
        navigate(`/customer-detail/${customerid}`);
    };

    // Split address into parts if needed
    // const [street, city, state, zip] = address.split(', ');

    return (
        <div className="customer-row self-stretch relative h-20 overflow-hidden shrink-0 cursor-pointer text-left text-base text-primary-navy font-heading-h5-bold"
             onClick={handleClick}
        >
            {/* Customer info and layout here */}
            <div className="flex flex-row items-center justify-between">
                <img
                    className="w-11 h-11 rounded-full object-cover"
                    alt=""
                    src={avatar || 'avatar6@2x.png'} // Provide a default image if avatar is not available
                />
                <div className="flex-1">{`${firstname} ${lastname}`}</div>
                <div className="flex-1">{email}</div>
                <div className="flex-1">{phone}</div>
                <div className="flex-1">{address}</div>
                {/* ... */}
            </div>
            <img
                className="edit-icon w-6 h-6"
                alt="Edit"
                src="/edit-cell1.svg"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the row's click event
                  navigate(`/customer-edit/${customerid}`);
                }}
            />
        </div>
    );
};

export default CustomerRow;
