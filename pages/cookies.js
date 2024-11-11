import Layout from "@/components/Layout.js"

export const metadata = {
    title: "Blog - Page d'informations Cookies",
    description: "...",
  };


export default function CookiesPage(){


    return (
        <Layout>
            <div className="p-10 min-h-[85vh] w-full flex flex-col items-start justify-start mb-5">
            <h1 className="text-3xl font-semibold mb-4 text-gray-400">Politique de Gestion des Cookies</h1>
    <p className="text-sm text-gray-00 mb-6">Dernière mise à jour : [date]</p>

    <p className="mb-6">Notre site utilise des cookies pour améliorer votre expérience utilisateur, analyser le trafic et adapter nos services. En poursuivant votre navigation, vous acceptez l'utilisation de ces cookies, sauf si vous choisissez de les désactiver. Cette politique de gestion des cookies a pour objectif de vous informer de manière transparente sur l’utilisation des cookies et autres technologies similaires.</p>

    <h2 className="text-2xl font-semibold mb-4 text-gray-400">1. Qu'est-ce qu'un cookie ?</h2>
    <p className="mb-6">Un cookie est un petit fichier texte enregistré sur le disque dur de votre terminal (ordinateur, smartphone, tablette) par le biais de votre navigateur lorsque vous visitez un site web. Les cookies permettent à notre site de vous reconnaître, de mémoriser vos préférences, et d'améliorer votre expérience utilisateur.</p>

    <h2 className="text-2xl font-semibold mb-4 text-gray-400">2. Types de cookies utilisés</h2>
    <ul className="list-disc list-inside mb-6">
        <li><strong>Cookies essentiels</strong> : Ces cookies sont indispensables pour naviguer sur notre site et utiliser ses fonctionnalités. Ils ne peuvent pas être désactivés, car ils sont nécessaires pour le bon fonctionnement de notre site.</li>
        <li><strong>Cookies de performance et d'analyse</strong> : Ces cookies nous permettent de comprendre comment les utilisateurs interagissent avec notre site (par exemple, pages visitées, durée de visite). Ils nous aident à améliorer la performance de notre site.</li>
        <li><strong>Cookies de personnalisation</strong> : Ces cookies permettent de retenir vos choix et préférences (langue, emplacement géographique) pour vous offrir une expérience personnalisée.</li>
        <li><strong>Cookies publicitaires</strong> : Ces cookies sont utilisés pour vous présenter des annonces plus pertinentes pour vous et vos intérêts. Ils permettent également de limiter le nombre de fois que vous voyez une publicité et d’évaluer l’efficacité de nos campagnes publicitaires.</li>
    </ul>

    <h2 className="text-2xl font-semibold mb-4 text-gray-400">3. Consentement à l'utilisation des cookies</h2>
    <p className="mb-6">Lors de votre première visite sur notre site, un bandeau vous informe de l’utilisation des cookies et vous propose d’accepter ou de refuser ceux-ci. Vous pouvez à tout moment gérer vos préférences en matière de cookies via les paramètres de votre navigateur ou en accédant aux préférences sur notre site.</p>

    <h2 className="text-2xl font-semibold mb-4 text-gray-400">4. Gestion des cookies</h2>
    <p className="mb-6">Vous pouvez gérer ou supprimer les cookies en modifiant les paramètres de votre navigateur ou via notre module de gestion des cookies. Veuillez noter que certaines fonctionnalités de notre site pourraient être affectées si vous choisissez de désactiver certains cookies.</p>
    <p className="mb-6">Les liens ci-dessous vous indiquent comment configurer les cookies pour chaque navigateur :</p>
    <ul className="list-none list-inside mb-6">
        <li className="mb-5"><a href="#" className="border p-2 bg-gray-200 text-blue-600 hover:underline transition-all">Google Chrome</a></li>
        <li className="mb-5"><a href="#" className="border p-2 bg-gray-200 text-blue-600 hover:underline transition-all">Mozilla Firefox</a></li>
        <li className="mb-5"><a href="#" className="border p-2 bg-gray-200 text-blue-600 hover:underline transition-all">Safari</a></li>
        <li className="mb-5"><a href="#" className="border p-2 bg-gray-200 text-blue-600 hover:underline transition-all">Microsoft Edge</a></li>
    </ul>

    <h2 className="text-2xl font-semibold mb-4 text-gray-400">5. Durée de conservation des cookies</h2>
    <p className="mb-6">Les cookies sont conservés pour une durée maximale de [nombre] mois à compter de votre consentement. Après cette période, votre consentement sera à nouveau requis.</p>

    <h2 className="text-2xl font-semibold mb-4 text-gray-400">6. Vos droits en matière de données personnelles</h2>
    <p className="mb-6">Conformément à la législation française et européenne, vous avez des droits d'accès, de rectification, d'opposition et de suppression sur vos données personnelles. Pour plus d’informations, consultez notre <a className="text-gray-200 hover:text-gray-400 transition-all" href="#">Politique de Confidentialité</a> ou contactez-nous via l’adresse suivante : <a className="text-gray-200 hover:text-gray-400 transition-all" href="mailto:[adresse email de contact]" >[adresse email de contact]</a>.</p>

    <h2 className="text-2xl font-semibold mb-4 text-gray-400">7. Contact</h2>
    <p className="mb-6">Si vous avez des questions concernant notre politique de cookies, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:[adresse email de contact]" className="text-gray-200 hover:text-gray-400 transition-all hover:underline">[adresse email de contact]</a>.</p>
            </div>

        </Layout>
    )

}