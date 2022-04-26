import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import PropsTypes from 'prop-types'

export default function Input(props: {
  name: string
  label: string
  type: string
  placeholder: string
  input: string
  value: any
}) {
  const [selected, setSelected] = useState(props.value[0])
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={props.name} className="ml-6">
          {props.label}
        </label>
        {props.input != 'listselect' ? (
          props.type == 'textarea' ? (
            <textarea
              id={props.name}
              name={props.name}
              rows={5}
              cols={15}
              placeholder={props.placeholder}
              className="px-4 py-2 mx-2 w-60 md:w-[490px] border border-white rounded-xl bg-black"
            >
              {}
            </textarea>
          ) : (
            <input
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              id={props.name}
              className="px-4 py-2 mx-2 w-60 h-11 border border-white rounded-full bg-black"
            />
          )
        ) : (
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative flex flex-col">
              <Listbox.Button className="relative mx-2 py-2 pl-4 pr-10 w-60 h-11 text-left bg-black border rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-16 overflow-auto bg-black rounded-md border max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {props.value.map((data: any, personIdx: any) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `cursor-default select-none relative
                            py-2 pl-10 pr-4 ${
                              active
                                ? 'text-amber-900 bg-amber-100'
                                : 'text-gray-900'
                            }`
                      }
                      value={data}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate 
                                hover:cursor-pointer ${
                                  selected ? 'font-bold' : 'font-light'
                                }
                                hover:font-bold
                                `}
                          >
                            {data.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        )}
      </div>
    </>
  )
}

Input.defaultProps = {
  label: 'champs :',
  type: 'text',
  name: 'name',
  placeholder: 'champs',
  input: 'input',
  value: [
    { id: 1, name: 'Element 1', unavailable: false },
    { id: 2, name: 'Element 2', unavailable: false },
    { id: 3, name: 'Element 3', unavailable: false },
    { id: 4, name: 'Element 4', unavailable: true },
  ],
}

Input.propType = {
  label: PropsTypes.string,
  type: PropsTypes.string,
  name: PropsTypes.string,
  placeholder: PropsTypes.string,
  input: PropsTypes.string,
  value: PropsTypes.object,
}
