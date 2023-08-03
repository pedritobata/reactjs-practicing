
export default function DisplayNested({nestedObjected}: any) {

    return (<>
        {
            Object.entries(nestedObjected).map(([key, value]) => {
                if(typeof value === 'string') {
                    return <p>{`${key}: ${value}`}</p>
                } else if(typeof value === 'object') {
                    return (<>
                        <p>{`${key}: `}</p>
                        <div style={{ paddingLeft: '50px' }}>
                           <DisplayNested nestedObjected={value} />
                        </div>
                    </>)
                } else {
                    return false
                }
                
            })
        }

    </>)
}