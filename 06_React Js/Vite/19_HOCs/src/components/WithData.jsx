import React, { useEffect, useState } from 'react'

function WithData(WrappedComponent,apiUrl) {
    return (props) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async() => {
                try {
                    const response = await fetch(apiUrl);
                    const resutl = await response.json();
                    setData(resutl);
                }
                catch(err) {
                    console.log(err.message);
                }
                finally {
                    setLoading(false);
                }
            }
            fetchData();
        },[apiUrl])

        return (
            <WrappedComponent
                {...props}
                data={data}
                loading={loading}
                error={error}
            />
        );
    };
};

export default WithData
