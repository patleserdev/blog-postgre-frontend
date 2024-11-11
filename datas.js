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
  mapped:false,
  inputs:
  [
    // {
    //   label:'ID utilisateur',
    //   field :'user_id',
    //   type:'number',
    //    placeholder:'l\'ID utilisateur',
    //   display:true,
    //   displayinselect:'id',
    //  },
    {
      label:'nom d\'utilisateur',
      field :'username',
      type:'string',
      required:true,
      placeholder:'le nom d\'utilisateur',
      display:true,
      displayinselect:'username'
     }
     ,{
      label:'email',
      field:'email',
      type:'string',
      required:true,
      placeholder:'l\'adresse mail',
      display:true,
      displayinselect:'email'
     },
     {
      label:'Actif ?',
      field:'isactive',
      type:'boolean',
      placeholder:'Actif',
      display:true
     }
  ]
},
{
  source:'posts',
  label:'posts',
  identifier:'post_id',
  mapped:true,
  mappedUrl:'posts',
  mappedIdentifier:'post_id',
  inputs:
  [
    // {
    //   label:'ID post',
    //   field :'post_id',
    //   type:'number',
      
    //   placeholder:'l\'id du post',
    //   display:true
    //  },
    {
      label:'Titre du post',
      field :'title',
      type:'string',
      required:true,
      placeholder:'le titre du post',
      display:true
     }
     ,{
      label:'Contenu du post',
      field:'content',
      type:'longtext',
      required:true,
      placeholder:'le contenu du post',
      display:false
     },
     {
      label:'Catégorie',
      field:'categorie_id',
      type:'entity',
      entity:'postcategories',
      displayinselect:'title',
      valueinselect:'categorie_id',
      comments:'permet de choisir la catégorie dans la liste des catégories',
      required:true,
      placeholder:'Choisir la catégorie',
      display:true
     }
     ,{
      label:'Archivé',
      field:'isarchived',
      type:'boolean',
      required:false,
      placeholder:'Cocher s\'il est archivé',
      display:true
     }
     ,{
      label:'Détruit',
      field:'isdestroyed',
      type:'boolean',
      required:false,
      placeholder:'Cocher s\'il est détruit',
      display:true
     }
     ,{
      label:'Image',
      field:'picture_url',
      type:'upload',
      required:false,
      placeholder:'Ajoute l\'image',
      display:true
     }
    //  ,{
    //   label:'Public_ID',
    //   field:'public_id',
    //   type:'none',
    //   required:false,
      
    //  }
  ]
},
{
  source:'comments',
  label:'Commentaires',
  identifier:'comment_id',
  mapped:false,
  inputs:
  [
    {
      label:'Titre',
      field :'title',
      type:'string',
      required:true,
      placeholder:'le nom',
      display:true
     }
     ,{
      label:'Contenu',
      field:'content',
      type:'longtext',
      required:true,
      placeholder:'le contenu du commentaire',
      display:true
     }
     ,{
      label:'Archivé ?',
      field:'isarchived',
      type:'boolean',
      required:false,
      display:true
     }
     ,{
      label:'Détruit ?',
      field:'isdestroyed',
      type:'boolean',
      required:false,
      display:true
      
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
      placeholder:'Choisir l\'utilisateur',
      display:true
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
      placeholder:'Choisir le post',
      display:true
     }
  ]
},

{
  source:'postcategories',
  label:'Catégories de posts',
  identifier:'categorie_id',
  mapped:true,
  mappedUrl:'categorie',
  mappedIdentifier:'title',
  inputs:
  [
    // {
    //   label:'ID catégorie',
    //   field :'categorie_id',
    //   type:'number',
      
    //   placeholder:'l\'id de la catégorie',
    //   display:true
    //  },
    {
      label:'Titre',
      field :'title',
      type:'string',
      required:true,
      placeholder:'le titre',
      display:true
     }
     ,{
      label:'Description',
      field:'description',
      type:'string',
      required:true,
      placeholder:'la description',
      display:true
     }
     ,{
      label:'Actif ?',
      field:'isactive',
      type:'boolean',
      placeholder:'si la catégorie est active ',
      display:true
     }
  ]
},
]