import React, { useCallback, memo, } from 'react';
import { Text, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';

const DropdownItem = ({ data, derivedProp, placeholder, searchablePlaceholder, setValue }) => {

     const getData = derivedProp => {
        let items = []
      
        if (derivedProp === 'activity') {
            items = data.reduce((acc, item) => {
                const names = item[derivedProp].map(act => act['title'])
                const combineNames = [...acc, ...names]
                const uniqueNames = combineNames.filter((item, idx) => combineNames.indexOf(item) === idx)
                return uniqueNames
            }, [])
        } else {
            items = data.reduce((acc, item) => {
                const name = item[derivedProp]['title'];
                return acc.includes(name) ? acc : [...acc, name]
            }, [])

        }
        const getDropdownItems = (items) => {
            const dropdownItems = items.map(name => {
                return { label: name, value: name }
            })
            return dropdownItems
        }
        return getDropdownItems(items)
    }


    return (
        <>
            <DropDownPicker
                items={data ? getData(derivedProp) : []}
                defaultValue={null}
                containerStyle={{ height: 60 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start',
                    paddingVertical: 10,
                }}
                searchableError={() => <Text>Нету елементов</Text>}
                searchable={!!data}
                searchablePlaceholder={searchablePlaceholder}
                placeholder={placeholder}
                dropDownStyle={{ backgroundColor: '#fafafa', }}

                zIndex={derivedProp === 'activity' ? 1 : 10}
                onChangeItem={item => setValue(item.value)}
            />

        </>
    )
}

DropdownItem.displayName = 'DropdownItem';

DropdownItem.PropTypes = {
    text: PropTypes.string.isRequired
};

export default memo(DropdownItem);