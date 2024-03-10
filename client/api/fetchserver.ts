export const fetchWithParams = async <AnyType = any>(path: string, params: {[key: string]: any}) => {
    try {
        const response = await fetch(`http://localhost:8080/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (response.ok) {
            const responseData: AnyType = await response.json();
            return responseData
        } else {
            console.error('failed to fetch data from the server');
        }
    } catch (error) {
        console.error('error while fetching data:', error);
    }
}