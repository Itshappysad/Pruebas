const PAYU_BASE_URL = 'https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi'; // URL de sandbox de PayU
const API_KEY = '4Vj8eK4rloUd272L48hsrarnUA';
const API_LOGIN = 'pRRXKOl8ikMmt9u';
const MERCHANT_ID = '508029';
const ACCOUNT_ID = '512321';

export const payWithPayU = async (paymentData: any) => {
    const payload = {
        language: "es",
        command: "SUBMIT_TRANSACTION",
        merchant: {
            apiKey: API_KEY,
            apiLogin: API_LOGIN
        },
        transaction: {
            order: {
                accountId: ACCOUNT_ID,
                referenceCode: paymentData.referenceCode,
                description: paymentData.description,
                language: "es",
                signature: generateSignature(paymentData),
                notifyUrl: paymentData.notifyUrl,
                additionalValues: {
                    TX_VALUE: {
                        value: paymentData.amount,
                        currency: "COP"
                    }
                },
                buyer: paymentData.buyer
            },
            creditCard: paymentData.creditCard,
            type: "AUTHORIZATION_AND_CAPTURE",
            paymentMethod: paymentData.paymentMethod,
            paymentCountry: "CO",
            deviceSessionId: paymentData.deviceSessionId,
            ipAddress: paymentData.ipAddress,
            cookie: paymentData.cookie,
            userAgent: paymentData.userAgent
        },
        test: true
    };

    try {
        const response = await fetch(PAYU_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error processing payment with PayU', error);
        throw error;
    }
};

const generateSignature = (paymentData: any) => {
    // Implementa la lógica para generar la firma según las especificaciones de PayU
    // Esto generalmente implica usar el API_KEY, MERCHANT_ID y detalles de la transacción
    return "firma_generada";
};
