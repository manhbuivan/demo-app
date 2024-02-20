import axios from 'axios';

export const fetchLanguageData = async () => {
    try {
        const response = await axios.get('https://ap-southeast-bet-dm.chaien.vn/api/v1/setting');
        return response.data.data.languageDictionary;
    } catch (error) {
        console.error('Error fetching language data:', error);
        return {};
    }
};