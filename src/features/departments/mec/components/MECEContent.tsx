import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface MECEContentProps {
    dept: DepartmentData;
}

const MECEContent: React.FC<MECEContentProps> = ({ dept }) => {
    const items = [
        { 
            title: 'MEC- 2025-29 Batch',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2oBxnaF-a1MPciqZkmJBdMVX8RLUfGrkrNb7zqYRDOqOoM-In-4nIm0cvbmGHMA/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'MEC- 2024-28 Batch',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTz_V58QmWGXBLNEflvNKBXs_yzk_aksOuIrpKSZo-VA_bly0km0vfNLeUgd-FUvQ/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'MEC- 2023-27 Batch',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRAv5hsXaU4f1RyumTPHDlOPSDrX-l5o1ZIKNSxHXYuiJ_vlv_FcLO3ZMvNYGaGcg/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'MEC- 2022-26 Batch',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTwx_GwGgBhfw2CDKpFsuGGtO4_icC4CX6NDKNT-01PlGmGaaUrsJiZIGCK8mwHXA/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'MEC- 2021-25 Batch',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRO2AkhaJF7I9bVgQGqQz1zvli3fA7jsoUM6bKxlocl8RBNy5SHNDfIdk4qGifvvQ/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'MEC- 2020-24 Batch',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSqlq3ZCN92NbVzFtM2zMVjFPqkQ9SgxOOTMmLeuuE1J8zPHyM7hyGRuTyvi0L_IQ/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'MEC- 2019-23 Batch',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR4FsSi_x4lXRx9mafLxv2jGh5-YtUzyuBVsLUxLKaSCRRvIRFv_kWy-_N_Cjmw-g/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
    ];
    return <DepartmentAccordion title="E-CONTENT" items={items} defaultOpenIndex={-1} />;
};

export default MECEContent;
