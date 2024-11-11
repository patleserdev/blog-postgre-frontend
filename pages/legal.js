import Layout from "@/components/Layout.js"

export const metadata = {
    title: "Blog - Page des mentions légales",
    description: "...",
  };


export default function Mentionslegales(){


    return (
        <Layout>
            <div className="min-h-[85vh] w-full flex flex-col items-start justify-start p-5">
            <h1 className="text-3xl font-semibold mb-4 text-gray-400">Mentions Légales</h1>

<section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 text-gray-400">Éditeur du Site</h2>
    <p><strong>Nom de l’entreprise</strong> : [Nom de la société ou du propriétaire du site]</p>
    <p><strong>Forme juridique</strong> : [Forme juridique, ex. : SARL, SAS, auto-entrepreneur]</p>
    <p><strong>Capital social</strong> : [Montant du capital social, si applicable]</p>
    <p><strong>Siège social</strong> : [Adresse complète du siège social]</p>
    <p><strong>Numéro de RCS</strong> : [Numéro d'immatriculation au Registre du Commerce et des Sociétés]</p>
    <p><strong>Numéro de TVA intracommunautaire</strong> : [Numéro de TVA, si applicable]</p>
    <p><strong>Directeur de la publication</strong> : [Nom du directeur de la publication, généralement le représentant légal de l'entreprise]</p>
</section>

<section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 text-gray-400">Hébergement du Site</h2>
    <p><strong>Hébergeur</strong> : [Nom de l’hébergeur]</p>
    <p><strong>Adresse de l’hébergeur</strong> : [Adresse complète de l’hébergeur]</p>
    <p><strong>Téléphone de l’hébergeur</strong> : [Numéro de téléphone de l’hébergeur]</p>
</section>

<section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 text-gray-400">Propriété intellectuelle</h2>
    <p>L’ensemble des éléments figurant sur le site (textes, images, logos, vidéos, etc.) sont protégés par les dispositions du Code de la propriété intellectuelle et appartiennent à [Nom de l’entreprise] ou sont utilisés avec l’autorisation de leurs propriétaires respectifs. Toute reproduction, représentation, modification, publication, ou adaptation des éléments du site, en tout ou partie, est interdite, sauf autorisation préalable écrite de [Nom de l’entreprise].</p>
</section>

<section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 text-gray-400">Responsabilité</h2>
    <p>[Nom de l’entreprise] s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes, et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
</section>

<section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 text-gray-400">Cookies et données personnelles</h2>
    <p>Le site peut recueillir automatiquement des informations standard telles que l’adresse IP de l’utilisateur, pour améliorer la navigation. [Nom de l’entreprise] veille à respecter la réglementation applicable en matière de données personnelles et d’utilisation de cookies. Pour en savoir plus, consultez notre <a href="#" className="text-gray-200 hover:text-gray-400 transition-all hover:underline">Politique de confidentialité</a> et notre <a href="#" className="text-gray-200 hover:text-gray-400 transition-all hover:underline">Politique de gestion des cookies</a>.</p>
</section>

<section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 text-gray-400">Droits d'accès, de modification et de suppression</h2>
    <p>Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit d'accès, de modification, et de suppression de vos données personnelles. Pour exercer ces droits, veuillez contacter :</p>
    <p><strong>Adresse e-mail</strong> : <a href="mailto:[adresse email de contact]" className="text-gray-200 hover:text-gray-400 transition-all hover:underline">[adresse email de contact]</a></p>
    <p><strong>Adresse postale</strong> : [Adresse postale de l’entreprise]</p>
</section>

<section className="mb-8">
    <h2 className="text-2xl font-semibold mb-2 text-gray-400">Contact</h2>
    <p>Pour toute question concernant ces mentions légales ou l’utilisation du site, vous pouvez nous contacter à l’adresse suivante : <a href="mailto:[adresse email de contact]" className="text-gray-200 hover:text-gray-400 transition-all hover:underline">[adresse email de contact]</a>.</p>
</section>
           
            </div>

        </Layout>
    )

}