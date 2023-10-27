import * as p from '@clack/prompts';
import * as color from 'picocolors';

/**
 * Richiedi le informazioni per creare un nuovo progetto
 * @returns {Promise} Promise con le informazioni del progetto
 */
export const promptUserProject = async () => {

    console.clear();
    p.intro(`${color.bgCyan(color.black(' Create App '))}`);

    /**
     * Richiedi il nome del progetto
     */
    const __name = () =>
        p.text({
            message: 'Provide a name for your project',
            initialValue: 'my-react-lib',
            validate: (value) => {
                if (!value) return 'Please enter a name.';
            },
        });

    const project = await p.group(
        {
            __name
        },
        {
            onCancel: () => {
                p.cancel('Operation cancelled.');
                process.exit(0);
            },
        }
    );

    return project;
}
