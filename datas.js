/**
 * Exemple d'utilisation des champs
 * input type string
 * {
        label:'nom d\'utilisateur',
        field :'username',
        type:'string',
        required:true,
        placeholder:'le nom d\'utilisateur'
    }
  * input type boolean 
     {
        label:'Actif ?',
        field:'isactive',
        type:'boolean',
        placeholder:'Actif'
       }
  * input type select
     {
        label:'ingrédients',
        field:'ingredients',
        type:'choice',
        comments:'choix des ingrédients dans une liste - restitution d\'un tableau contenant l\'ingrédient,la quantité et la mesure utilisée',
        placeholder:'les ingrédients'
       } 
  * input type select
            ,{
        label:'content',
        field:'categorie',
        type:'entity',
        entity:'ingredientscategories',
        comments:'permet de choisir la catégories dans la liste de catégories',
        required:true,
        placeholder:''
       }
  * many datas in one input
  source:'recipes',
  label:'recettes',
  inputs:
  [
    {
      label:'nom',
      field :'name',
      type:'string',
      required:true,
      placeholder:'le nom'
     }
     ,{
      label:'nombre de parts',
      field:'defaultServing',
      type:'range',
      min:1,
      max:12,
      default:4,
      required:true,
      placeholder:'',
      unit:''
     }
     ,{
      label:'ingrédients',
      field:'ingredients',
      type:'choice',
      comments:'choix des ingrédients dans une liste - restitution d\'un tableau contenant l\'ingrédient,la quantité et la mesure utilisée',
      placeholder:'les ingrédients'
     }
     ,{
      label:'Les étapes',
      field:'steps',
      type:'steps',
      comments:'permet d\'ajouter une ou plusieurs étapes, pouvoir ajouter une nouvelle étape dans le formulaire',
       placeholder:'le contenu de l\'étape'
     }
     ,{
      label:'image',
      field:'pictures',
      type:'upload',
      comment:'pouvoir ajouter une ou plusieurs images , stockées dans cloudinary',
       placeholder:''
     }
     ,{
      label:'temps de cuisson',
      field:'timeToCook',
      type:'range',
      min:0,
      max:300,
       placeholder:'',
       unit:'mn'
     }
     ,{
      label:'temps de préparation',
      field:'timeToPrepare',
      type:'range',
      min:0,
      max:300,
      placeholder:'',
      unit:'mn'
     }
     ,{
      label:'difficulté',
      field:'difficulty',
      type:'range',
      min:1,
      max:5,
       placeholder:'',
       unit:''
     }
  ]
 */

export const datas=[
  {
  source:'users',
  label:'Utilisateurs',
  identifier:'user_id',
  inputs:
  [
    {
      label:'nom d\'utilisateur',
      field :'username',
      type:'string',
      required:true,
      placeholder:'le nom d\'utilisateur'
     }
     ,{
      label:'email',
      field:'email',
      type:'string',
      required:true,
      placeholder:'l\'adresse mail'
     },
     {
      label:'Actif ?',
      field:'isactive',
      type:'boolean',
      placeholder:'Actif'
     }
  ]
},
{
  source:'posts',
  label:'posts',
  identifier:'post_id',
  inputs:
  [
    {
      label:'Titre du post',
      field :'title',
      type:'string',
      required:true,
      placeholder:'le titre du post'
     }
     ,{
      label:'Contenu du post',
      field:'content',
      type:'longtext',
      required:true,
      placeholder:'le contenu du post'
     },
     {
      label:'Catégorie',
      field:'categorie_id',
      type:'entity',
      entity:'postcategories',
      displayinselect:'title',
      valueinselect:'categorie_id',
      comments:'permet de choisir l\'utilisateur dans la liste d\'utilisateur',
      required:true,
      placeholder:'Choisir l\'utilisateur'
     }
     ,{
      label:'Archivé',
      field:'isarchived',
      type:'boolean',
      required:false,
      placeholder:'Cocher s\'il est archivé'
     }
     ,{
      label:'Détruit',
      field:'isdestroyed',
      type:'boolean',
      required:false,
      placeholder:'Cocher s\'il est détruit'
     }
     ,{
      label:'Image',
      field:'picture_url',
      type:'upload',
      required:false,
      placeholder:'Ajoute l\'image'
     }
     ,{
      label:'Image',
      field:'public_id',
      type:'none',
      required:false,
      
     }
  ]
},
{
  source:'comments',
  label:'Commentaires',
  identifier:'comment_id',
  inputs:
  [
    {
      label:'Titre',
      field :'title',
      type:'string',
      required:true,
      placeholder:'le nom'
     }
     ,{
      label:'Contenu',
      field:'content',
      type:'longtext',
      required:true,
      placeholder:'le contenu du commentaire'
     }
     ,{
      label:'Archivé ?',
      field:'isarchived',
      type:'boolean',
      required:false,
     }
     ,{
      label:'Détruit ?',
      field:'isdestroyed',
      type:'boolean',
      
     },
     {
      label:'Utilisateur',
      field:'user_id',
      type:'entity',
      entity:'users',
      displayinselect:'username',
      valueinselect:'user_id',
      comments:'permet de choisir l\'utilisateur dans la liste d\'utilisateur',
      required:true,
      placeholder:'Choisir l\'utilisateur'
     },
     {
      label:'Post',
      field:'post_id',
      type:'entity',
      entity:'posts',
      displayinselect:'title',
      valueinselect:'post_id',
      comments:'permet de choisir le post dans la liste de posts',
      required:true,
      placeholder:'Choisir le post'
     }
  ]
},

{
  source:'postcategories',
  label:'Catégories de posts',
  identifier:'categorie_id',
  inputs:
  [
    {
      label:'Titre',
      field :'title',
      type:'string',
      required:true,
      placeholder:'le titre'
     }
     ,{
      label:'Description',
      field:'description',
      type:'string',
      required:true,
      placeholder:'la description'
     }
     ,{
      label:'Actif ?',
      field:'isactive',
      type:'boolean',
      placeholder:'si la catégorie est active '
     }
  ]
},
]