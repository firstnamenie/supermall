<template>
    <div class="cart-list">
      <scroll class="scroll">
        <!--<h2 v-for="item in shopCartList">{{item}}</h2>-->
        <li>li标签1</li>
        <li>li标签2</li>
        <li>li标签3</li>
        <li>li标签4</li>
        <li>li标签5</li>
        <li>li标签6</li>
        <li>li标签7</li>
        <li>li标签8</li>
        <li>li标签9</li>
        <li>li标签10</li>
        <li>li标签11</li>
        <li>li标签12</li>
        <li>li标签13</li>
        <li>li标签14</li>
        <li>li标签15</li>
        <li>li标签16</li>
        <li>li标签17</li>
        <li>li标签18</li>
        <li>li标签19</li>
        <li>li标签20</li>
        <li>li标签21</li>
        <li>li标签22</li>
        <li>li标签23</li>
        <li>li标签24</li>
        <li>li标签25</li>
        <li>li标签26</li>
        <li>li标签27</li>
        <li>li标签28</li>
        <li>li标签29</li>
        <li>li标签30</li>
        <li>li标签31</li>
        <li>li标签32</li>
        <li>li标签33</li>
        <li>li标签34</li>
        <li>li标签35</li>
        <li>li标签36</li>
        <li>li标签37</li>
        <li>li标签38</li>
        <li>li标签39</li>
        <li>li标签40</li>
        <li>li标签41</li>
        <li>li标签42</li>
        <li>li标签43</li>
        <li>li标签44</li>
        <li>li标签45</li>
        <li>li标签46</li>
        <li>li标签47</li>
        <li>li标签48</li>
        <li>li标签49</li>
        <li>li标签50</li>
        <li>li标签51</li>
        <li>li标签52</li>
        <li>li标签53</li>
        <li>li标签54</li>
        <li>li标签55</li>
        <li>li标签56</li>
        <li>li标签57</li>
        <li>li标签58</li>
        <li>li标签59</li>
        <li>li标签60</li>
        <li>li标签61</li>
        <li>li标签62</li>
        <li>li标签63</li>
        <li>li标签64</li>
        <li>li标签65</li>
        <li>li标签66</li>
        <li>li标签67</li>
        <li>li标签68</li>
        <li>li标签69</li>
        <li>li标签70</li>
        <li>li标签71</li>
        <li>li标签72</li>
        <li>li标签73</li>
        <li>li标签74</li>
        <li>li标签75</li>
        <li>li标签76</li>
        <li>li标签77</li>
        <li>li标签78</li>
        <li>li标签79</li>
        <li>li标签80</li>
        <li>li标签81</li>
        <li>li标签82</li>
        <li>li标签83</li>
        <li>li标签84</li>
        <li>li标签85</li>
        <li>li标签86</li>
        <li>li标签87</li>
        <li>li标签88</li>
        <li>li标签89</li>
        <li>li标签90</li>
        <li>li标签91</li>
        <li>li标签92</li>
        <li>li标签93</li>
        <li>li标签94</li>
        <li>li标签95</li>
        <li>li标签96</li>
        <li>li标签97</li>
        <li>li标签98</li>
        <li>li标签99</li>
        <li>li标签100</li>
      </scroll>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import scroll from '@/components/common/scroll/Scroll'
    export default {
      name: "CartList",
      components:{
        scroll
      },
      computed:{
        ...mapGetters([
          'shopCartList'
          // ...
        ])
      }
    }
</script>

<style>
  .cart-list{
    height: 100vh;
  }
  .scroll{
    height:calc(100% - 93px);
    overflow: hidden;
  }
</style>
