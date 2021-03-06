/* Core */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema: yup.SchemaOf<FormShape> = yup
    .object()
    .shape({
        email: yup
            .string()
            .email('Should be valid email.')
            .required('Required.'),
    })
    .required();

export const resolver = yupResolver(schema);

/* Types */
interface FormShape {
    email: string;
}
