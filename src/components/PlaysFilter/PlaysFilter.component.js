import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
const MyDisclosure = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
       
          <Disclosure.Button className="py-2 flex items-center gap-3">
            {open ? <BiChevronUp /> : <BiChevronDown />}

            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button >
         
            <Disclosure.Panel className="text-gray-500 h-24 ">
              <div className="flex items-center gap-3 flex-wrap px-4">
                {props.tags.map((tag) => (
                  <>
                    <div className="border-2 border-slate-200 px-2 ">
                      <span className="text-red-600">{tag}</span>
                    </div>
                  </>
                ))}
              </div>
            </Disclosure.Panel>
            
        </>
      )}
    </Disclosure>
    
  );
};

export default MyDisclosure;
